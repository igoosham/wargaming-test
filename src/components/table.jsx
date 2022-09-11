import React from 'react';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function Table({ data, total, resource }) {
  return (
    <div>
      <table>
        <thead>
            <tr>
                <th></th>
                <th>{capitalizeFirstLetter(resource)}</th>
                <th>{total.toLocaleString('us-US')}</th>
            </tr>
        </thead>
        <tbody>
            {data.map((item, index) => (
                <tr key={index}>
                    <td>{item.name}</td>
                    <td>{resource}</td>
                    <td>{item.value.toLocaleString('us-US')}</td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;