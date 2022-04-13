import ReactDOM from "react-dom/client";
import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";
import EventComponent from "./events/EventComponent";
import RefUserSearch from "./refs/UserSearch";

const App = () => {
    return (
        <div>
            <GuestList />
            <UserSearch />
            <EventComponent />
            <RefUserSearch />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<App />);
