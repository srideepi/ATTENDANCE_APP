import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './ViewAttendance.css';  // Import the CSS file

const ViewAttendance = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const pieData = selectedDate ? {
    labels: ['Present', 'Absent'],
    datasets: [{
      data: [selectedDate.attendancePercentage, 100 - selectedDate.attendancePercentage],
      backgroundColor: ['#FFCE56', '#36A2EB'],
      hoverBackgroundColor: ['#FFCE56', '#36A2EB'],
    }],
  } : null;

  return (
    <div className="p-8 bg-yellow-100">
      <div className="flex flex-col items-center bg-white p-6 shadow-md rounded-lg">
        <div className="flex flex-row w-full">
          <div className="w-2/3">
            <h2 className="text-red-500 text-xl font-bold">Role: Student</h2>
            <div className="mt-4">
              <p className="text-gray-700"><strong>Name:</strong> John Doe</p>
              <p className="text-gray-700"><strong>Roll No:</strong> 123456</p>
              <p className="text-gray-700"><strong>Register Number:</strong> 789101</p>
              <p className="text-gray-700"><strong>Department:</strong> Computer Science</p>
            </div>
          </div>
        </div>
        <div className="w-full mt-8">
          <h2 className="text-blue-900 text-lg font-bold">Attendance</h2>
          <Calendar onClickDay={(date) => setSelectedDate({ attendancePercentage: 75, hoursCompleted: 5, present: ['Event A', 'Event B'], absent: ['Event C'] })} />
          {selectedDate && (
            <div className="mt-4">
              <div className="w-64 h-64 mx-auto">
                <Pie data={pieData} />
              </div>
              <p className="mt-2 text-gray-700 text-center"><strong>No. Of Hours Completed:</strong> {selectedDate.hoursCompleted}</p>
              <table className="min-w-full bg-white border mt-4 table">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b">Volunteered</th>
                    <th className="py-2 px-4 border-b">Non-Volunteered</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b">
                      <ul>
                        {selectedDate.present.map((event, index) => (
                          <li key={index} className="text-gray-700">{event}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="py-2 px-4 border-b">
                      <ul>
                        {selectedDate.absent.map((event, index) => (
                          <li key={index} className="text-gray-700">{event}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewAttendance;
