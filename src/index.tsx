import React, { useState } from 'react';

const Zoom: React.FC = () => {
  const [inMeeting, setInMeeting] = useState(false);
  const [meetingId, setMeetingId] = useState('');
  const [muted, setMuted] = useState(false);
  const [videoOn, setVideoOn] = useState(true);

  if (inMeeting) {
    return (
      <div className="h-full bg-gray-900 flex flex-col">
        {/* Main Video */}
        <div className="flex-1 flex items-center justify-center relative">
          <div className="grid grid-cols-2 gap-4 p-8 w-full max-w-4xl">
            <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
              <span className="text-6xl">👤</span>
            </div>
            <div className="aspect-video bg-gray-700 rounded-lg flex items-center justify-center">
              {videoOn ? <span className="text-6xl">🎥</span> : <span className="text-6xl">👤</span>}
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="h-20 bg-gray-800 flex items-center justify-center gap-4">
          <button 
            onClick={() => setMuted(!muted)}
            className={`px-4 py-3 rounded-full ${muted ? 'bg-red-600' : 'bg-gray-600'} hover:bg-opacity-80`}
          >
            {muted ? '🔇' : '🎤'} {muted ? 'Unmute' : 'Mute'}
          </button>
          <button 
            onClick={() => setVideoOn(!videoOn)}
            className={`px-4 py-3 rounded-full ${!videoOn ? 'bg-red-600' : 'bg-gray-600'} hover:bg-opacity-80`}
          >
            {videoOn ? '📹' : '📷'} {videoOn ? 'Stop Video' : 'Start Video'}
          </button>
          <button className="px-4 py-3 rounded-full bg-gray-600 hover:bg-opacity-80">
            👥 Participants
          </button>
          <button className="px-4 py-3 rounded-full bg-gray-600 hover:bg-opacity-80">
            💬 Chat
          </button>
          <button className="px-4 py-3 rounded-full bg-gray-600 hover:bg-opacity-80">
            📤 Share Screen
          </button>
          <button 
            onClick={() => setInMeeting(false)}
            className="px-4 py-3 rounded-full bg-red-600 hover:bg-red-700"
          >
            End
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full bg-[#0b5cff] flex items-center justify-center">
      <div className="bg-white rounded-2xl p-8 w-96 shadow-2xl">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">📹</div>
          <h1 className="text-2xl font-bold text-gray-800">Zoom</h1>
        </div>
        
        <button 
          onClick={() => setInMeeting(true)}
          className="w-full py-3 bg-[#0b5cff] text-white rounded-lg font-semibold mb-4 hover:bg-blue-700"
        >
          New Meeting
        </button>
        
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={meetingId}
            onChange={(e) => setMeetingId(e.target.value)}
            placeholder="Meeting ID"
            className="flex-1 px-4 py-3 border rounded-lg"
          />
          <button 
            onClick={() => meetingId && setInMeeting(true)}
            className="px-6 py-3 bg-[#0b5cff] text-white rounded-lg font-semibold hover:bg-blue-700"
          >
            Join
          </button>
        </div>

        <button className="w-full py-3 border border-[#0b5cff] text-[#0b5cff] rounded-lg font-semibold hover:bg-blue-50">
          Schedule
        </button>
      </div>
    </div>
  );
};

export default Zoom;
