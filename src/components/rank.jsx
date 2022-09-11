import React, { useState, useEffect } from 'react';
import data from '../data/generated.js';
import Table from './table';


function up(a, b) {
  return a.value - b.value;
}

function down(a, b) {
  return b.value - a.value;
}

function reducer2(len) {
  if (len === 0) {
    return {
      obj: {},
      ladder: [],
    };
  }
  const resourceTotal = {};
  const chunk = data.slice(0, len);
  const obj = chunk.reduce((acc, { name, resource, value },) => {
    if (acc[resource] && acc[resource][name]) {
      acc[resource][name] += value;
      resourceTotal[resource] += value;
    } else if (acc[resource]) {
      acc[resource][name] = value;
      resourceTotal[resource] += value;
    } else {
      acc[resource] = {};
      acc[resource][name] = value;
      resourceTotal[resource] = value;
    }
    return acc;
  }, {});
  for(const key of Object.keys(obj)) {
    obj[key] = Object.keys(obj[key]).map(name => {
      return { name, value: obj[key][name] }
    }).sort(down);
  }
  const ladder = Object.keys(resourceTotal).map(key => {
    return { resource: key, value: resourceTotal[key] }
  }).sort(up);
  return {obj, ladder};
}

function Rank({ range }) {
    const [data, setData] = useState({
      obj: {},
      ladder: [],
    });

    useEffect(() => {
      const res = reducer2(range);
      setData(res);
    }, [range]);

    return (
      <div style={{
        overflow: 'auto',
      }}>
        {data.ladder.map(({ resource, value }) => (
          <Table data={data.obj[resource]} resource={resource} total={value} key={resource}/>
        ))}
      </div>
    );
}

export default Rank;
