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
    const timer = setTimeout(() => {
      setVisible((prevValue) => prevValue + 4);
    }, 1500);
    return () => {
      clearTimeout(timer);
      setLoading(true);
    };
  };

  const showNoMoreitems = () => {
    const timer = setTimeout(() => {
      setLoading();
      setVisible((prevValue) => prevValue);
    }, 2000);
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
        <h3>NO ROOMS MATCHED</h3>
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

      <div buttonStyle="btn--primary" className="roomloadingdiv">
        {!isLoading && (
          <Button
            buttonStyle="btn--primary"
            onClick={() => {
              showMoreitems();
              showNoMoreitems();
            }}
          >
            LOAD MORE
          </Button>
        )}
        {isLoading && (
          <Button buttonStyle="btn--primary">
            {visible > rooms.length ? (
              <>
                <Loading />
                <div className="empty-search">
                  <h3>NO MORE ROOMS</h3>
                </div>
              </>
            ) : (
              <Loading title="LOADING" />
            )}
            {console.log(visible)}
          </Button>
        )}
      </div>
    </section>
  );
}
