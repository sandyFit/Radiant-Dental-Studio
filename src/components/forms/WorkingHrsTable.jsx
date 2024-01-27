import React from 'react'

const WorkingHrsTable = () => {
  return (
    <table className='text-spanishBlue text-lg font-medium' style={{ borderCollapse: 'separate', borderSpacing: '0 1rem' }}>
      <tbody>
        <tr>
          <td>Monday</td>
          <td>09:00 am – 18:00 pm</td>
        </tr>
        <tr>
          <td>Tuesday</td>
          <td>09:00 am – 18:00 pm</td>
        </tr>
        <tr>
          <td>Wednesday</td>
          <td>09:00 am – 18:00 pm</td>
        </tr>
        <tr>
          <td>Thursday</td>
          <td>09:00 am – 18:00 pm</td>
        </tr>
        <tr>
          <td>Friday</td>
          <td>09:00 am – 18:00 pm</td>
        </tr>
        <tr>
          <td>Saturday</td>
          <td>10:00 am - 15:00 pm</td>
        </tr>
      </tbody>
    </table>
  );
};

export default WorkingHrsTable;
