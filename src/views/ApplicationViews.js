import { Route, Routes } from "react-router-dom";
import { Login } from "../components/auth/Login";
import { Register } from "../components/auth/Register";
import { Authorized } from "./Authorized";
import { GameList } from "../components/game/GameList";
import { EventList } from "../components/event/EventList";
import { GameForm } from "../components/game/GameForm";
import { EventForm } from "../components/game/EventForm";
export const ApplicationViews = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<Authorized />}>
          <Route path="/" element={<GameList />} />
          <Route Path="events" element={<EventList />} />
          <Route path="/games/new" element={<GameForm />} />
          <Route path="/events/new" element={<EventForm />} />
          <Route path="/events/:eventId/update" element={<UpdateEventForm />} />
          <Route exact path="/games/:gameId/update" element={<UpdateGameForm />} />
        </Route>
      </Routes>
    </>
  );
};
