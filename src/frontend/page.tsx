import usePromise from "react-use-promise"
import { repo } from "remult"

export function Todo() {
  const [result, error] = usePromise(async () => {}, [])
  return (
    <div>
      <main>
        <div>demo</div>
        {error && <div>Error: {error.message}</div>}
      </main>
    </div>
  )
}
