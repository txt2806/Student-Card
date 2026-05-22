import React, { useState } from 'react';
import './App.css';


const studentInfo = {
  avatar: "https://robohash.org/SE200359.png",
  fullName: "Trần Xuân Thành",
  studentId: "SE200359",
  className: "SE2009-NJ",
  major: "Software Engineer",
  hobbies: ["Football", "Gaming"],
  initialStatus: true
};

const StudentProfile = () => {
  const { avatar, fullName, studentId, className, major, hobbies, initialStatus } = studentInfo;

  const [isOnline, setIsOnline] = useState(initialStatus);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [likes, setLikes] = useState(0);

  const toggleStatus = () => {
    setIsOnline(!isOnline);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleLike = () => {
    let newLikes = likes + 1;
    setLikes(newLikes);
  };

  return (
    <div className={`app-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      
      <button className="theme-toggle-btn" onClick={toggleTheme}>
        {isDarkMode ? '☀️ Switch to Light Mode' : '🌙 Switch to Dark Mode'}
      </button>

      <div className="profile-card">
        <img src={avatar} alt="Student Avatar" className="avatar" />
        
        <h2 className="student-name">{fullName}</h2>
        <div className="student-details">
          <p><strong>ID:</strong> {studentId}</p>
          <p><strong>Class:</strong> {className}</p>
          <p><strong>Major:</strong> {major}</p>
        </div>

      <div className ="hobby-list">
        {hobbies.map((hobby, index) => 
      <li key = {index} className="hobby-item">{hobby}</li>)}
      </div>

        <div className="status-section">
          <p className="status-text">
            Trạng thái: <span className={isOnline ? 'online' : 'offline'}>
              {isOnline ? '🟢 Online' : '🔴 Offline'}
            </span>
          </p>
          <button className="btn toggle-btn" onClick={toggleStatus}>
            Đổi trạng thái
          </button>
        </div>

        <div className="interaction-section">
          <button className="btn like-btn" onClick={handleLike}>
            👍 Like
          </button>
          <p className="likes-count">{`Total Likes: ${likes}`}</p>
        </div>

      </div>
    </div>
  );
};

export default StudentProfile;