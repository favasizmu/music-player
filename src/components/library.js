import React from "react";
import LibrarySong from "./librarySongs";

const library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSong,
  libraryStatus,
}) => {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((sing) => (
          <LibrarySong
            song={sing}
            setCurrentSong={setCurrentSong}
            songs={songs}
            id={sing.id}
            key={sing.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setSong={setSong}
          />
        ))}
      </div>
    </div>
  );
};

export default library;
