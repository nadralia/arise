import React from 'react'
import "../../CSS/HomeVideo/VideoSection.css"

function VideoSection() {
    return (
        <div>
      {/* Video Section */}
      <div className="home-vid-section-heading"><h2>Upcoming & Recent Events</h2></div>
      <div className="home-video-section">
        <div className="home-video-section-container">
          <div className="home-video-section-left">
            <div className="home-video-section-left-sect">
                <p className="vid-section-date">06/06/2017 - 15:00</p>
                <h4>Our question reached the United Nations!</h4>
                <p>Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla, vestibulum placerat metus mattis. Aenean dictum vitae nisl nec tempor.</p>
            </div>
            <div className="home-video-section-left-sect">
                <p className="vid-section-date">06/06/2017 - 15:00</p>
                <h4>Our question reached the United Nations!</h4>
                <p>Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla, vestibulum placerat metus mattis. Aenean dictum vitae nisl nec tempor.</p>
            </div>
            <div className="home-video-section-left-sect">
                <p className="vid-section-date">06/06/2017 - 15:00</p>
                <h4>Our question reached the United Nations!</h4>
                <p>Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla, vestibulum placerat metus mattis. Aenean dictum vitae nisl nec tempor.</p>
            </div>
          </div>
          <div className="home-video-section-right">
              <iframe height="409" src="https://www.youtube.com/embed/bdBG5VO01e0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>
        </div>
    )
}

export default VideoSection
