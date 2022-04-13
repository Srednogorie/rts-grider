import React, {useState, useRef, useEffect} from "react";

const users = [
    {name: "John", age: 20},
    {name: "Peter", age: 30},
    {name: "Mary", age: 40},
]

const RefUserSearch: React.FC = () => {
    const ref = useRef<HTMLInputElement>(null);
    const [name, setName] = useState("");
    const [user, setUser] = useState<{name: string, age: number} | undefined>();
    const onClick = () => {
        const foundUser = users.find(
            (user) => user.name === name
        );
        setUser(foundUser);
    }
    useEffect(() => {
        ref.current!.focus();

        // if (!ref.current) {
        //     return;
        // }
        // ref.current.focus();

        // if (ref.current) {
        //     ref.current.focus();
        // }
    }, []);

    return (
        <div>
            User Search
            <input ref={ref} value={name} onChange={(e) => setName(e.target.value)}/>
            <button onClick={onClick}>Find User</button>
            <div>
                {user && user.name}
                {user && user.age}
            </div>
        </div>
    )
}
export default RefUserSearch;
