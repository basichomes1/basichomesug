import React, { useEffect, useState } from "react";
import Room from "./Room";
import "../../css/Rooms.css";
import Loading from "../Extras/Loading";
import { Button } from "../Button/Button";

export default function RoomsList({ rooms }) {
  const [isLoading, setLoading] = useState(false);
  const [visible, setVisible] = useState(4);

  const showMoreitems = () => {
    setLoading(true);
    setTimeout(() => {
      setVisible((prevValue) => prevValue + 4);
    }, 1500);
  };

  const showNoMoreitems = () => {
    const timer = setTimeout(() => {
      setLoading(false);
      setVisible((prevValue) => prevValue);
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible((prevValue) => prevValue);
    }, 100);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>NO ROOMS MATCH YOUR SEARCH CRITERIA</h3>
      </div>
    );
  }

  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {rooms.slice(0, visible).map((item) => {
          return <Room key={item.id} room={item} />;
        })}
      </div>

      <div buttonStyle="btn--primary" className="roomsloading">
        {!isLoading && (
          <div>
            {visible > rooms.length ? (
              <>
                <div className="auth-card" style={{ color: "white" }}>
                  <h2>NO MORE ROOMS</h2>
                </div>
              </>
            ) : (
              <>
                <Button
                  buttonStyle="btn--primary"
                  onClick={() => {
                    showMoreitems();
                    showNoMoreitems();
                  }}
                >
                  LOAD MORE
                </Button>
              </>
            )}
          </div>
        )}
        {isLoading && (
          <Button buttonStyle="btn--primary">
            {visible > rooms.length ? (
              <>
                <Loading title="NO MORE ROOMS" />
              </>
            ) : (
              <>
                <Loading title="PLEASE WAIT" />
              </>
            )}
            {console.log(visible)}
          </Button>
        )}
      </div>
    </section>
  );
}
