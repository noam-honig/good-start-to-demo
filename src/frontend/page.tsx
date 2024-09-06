import usePromise from "react-use-promise";
import { repo } from "remult";

export function Todo() {
  const [result, error] = usePromise(async () => {
    return [];
  }, []);
  return (
    <div>
      <main>
        <div>
          <ul>
            {result?.map((x) => (
              <li></li>
            ))}
          </ul>
        </div>

        {error && <div>Error: {error.message}</div>}
      </main>
    </div>
  );
}
