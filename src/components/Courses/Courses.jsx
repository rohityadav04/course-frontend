import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './courses.css';

const Courses = ({
  viewscount = 3,
  title,
  imageSrc = 'https://cdn.pixabay.com/photo/2023/04/06/20/34/cherry-blossom-7905091__340.jpg',
  id,
  handler,
  creator = 'Rohit',
  description,
  lectureCount = 2,
}) => {
  const [keyword, setKeyWord] = useState('');

  const [category, setCategory] = useState('');

  const categories = [
    'Web development',
    'Artifical Intelligence',
    'Data Structure & Algorithm',
    'App Development',
    'Data Science',
    'Game Development',
  ];
  const addToPlayListHandler = () => {
    console.log('addToPlayListHandler');
  };
  return (
    <>
      <div className="containers">
        <div className="course">
          <div className="heading">
            <h3>All Courses</h3>
          </div>

          <input
            value={keyword}
            onChange={e => setKeyWord(e.target.value)}
            placeholder="Search a Course........"
            type="text"
          />
          <div className="Categorybutton">
            {categories.map((item, index) => (
              <button key={index} onClick={() => setCategory(item)}>
                {item}
              </button>
            ))}
          </div>
          <div className="coursem">
            <div className="courses">
              <div className="coursesitem">
                <img className="images" src={imageSrc} />

                <p className="title">{(title = 'Sample')}</p>
                <p className="description">{(description = 'Sample')}</p>
                <p className="title">{`Creator  ${creator}`}</p>
                <p className="title">{`Lectures - ${lectureCount}`}</p>
                <p className="title">{`Views  - ${viewscount}`}</p>
              </div>
              <div className="coursebutton">
                <Link to={`/course/${id}`}>
                  <button className="watch">Watch Now</button>
                </Link>
                <button
                  className="add"
                  onClick={() => addToPlayListHandler(id)}
                >
                  Add to Playlist
                </button>
              </div>
            </div>
            <div className="courses">
              <div className="coursesitem">
                <img className="images" src={imageSrc} />

                <p className="title">{(title = 'Sample')}</p>
                <p className="description">{(description = 'Sample')}</p>
                <p className="title">{`Creator  ${creator}`}</p>
                <p className="title">{`Lectures - ${lectureCount}`}</p>
                <p className="title">{`Views  - ${viewscount}`}</p>
              </div>
              <div className="coursebutton">
                <Link to={`/course/${id}`}>
                  <button className="watch">Watch Now</button>
                </Link>
                <button
                  className="add"
                  onClick={() => addToPlayListHandler(id)}
                >
                  Add to Playlist
                </button>
              </div>
            </div>
            <div className="courses">
              <div className="coursesitem">
                <img className="images" src={imageSrc} />

                <p className="title">{(title = 'Sample')}</p>
                <p className="description">{(description = 'Sample')}</p>
                <p className="title">{`Creator  ${creator}`}</p>
                <p className="title">{`Lectures - ${lectureCount}`}</p>
                <p className="title">{`Views  - ${viewscount}`}</p>
              </div>
              <div className="coursebutton">
                <Link to={`/course/${id}`}>
                  <button className="watch">Watch Now</button>
                </Link>
                <button
                  className="add"
                  onClick={() => addToPlayListHandler(id)}
                >
                  Add to Playlist
                </button>
              </div>
            </div>
            <div className="courses">
              <div className="coursesitem">
                <img className="images" src={imageSrc} />

                <p className="title">{(title = 'Sample')}</p>
                <p className="description">{(description = 'Sample')}</p>
                <p className="title">{`Creator  ${creator}`}</p>
                <p className="title">{`Lectures - ${lectureCount}`}</p>
                <p className="title">{`Views  - ${viewscount}`}</p>
              </div>
              <div className="coursebutton">
                <Link to={`/course/${id}`}>
                  <button className="watch">Watch Now</button>
                </Link>
                <button
                  className="add"
                  onClick={() => addToPlayListHandler(id)}
                >
                  Add to Playlist
                </button>
              </div>
            </div>
            <div className="courses">
              <div className="coursesitem">
                <img className="images" src={imageSrc} />

                <p className="title">{(title = 'Sample')}</p>
                <p className="description">{(description = 'Sample')}</p>
                <p className="title">{`Creator  ${creator}`}</p>
                <p className="title">{`Lectures - ${lectureCount}`}</p>
                <p className="title">{`Views  - ${viewscount}`}</p>
              </div>
              <div className="coursebutton">
                <Link to={`/course/${id}`}>
                  <button className="watch">Watch Now</button>
                </Link>
                <button
                  className="add"
                  onClick={() => addToPlayListHandler(id)}
                >
                  Add to Playlist
                </button>
              </div>
            </div>
            <div className="courses">
              <div className="coursesitem">
                <img className="images" src={imageSrc} />

                <p className="title">{(title = 'Sample')}</p>
                <p className="description">{(description = 'Sample')}</p>
                <p className="title">{`Creator  ${creator}`}</p>
                <p className="title">{`Lectures - ${lectureCount}`}</p>
                <p className="title">{`Views  - ${viewscount}`}</p>
              </div>
              <div className="coursebutton">
                <Link to={`/course/${id}`}>
                  <button className="watch">Watch Now</button>
                </Link>
                <button
                  className="add"
                  onClick={() => addToPlayListHandler(id)}
                >
                  Add to Playlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
