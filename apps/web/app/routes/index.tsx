import { Button } from "ui";

//TODO: Determine based on login whether the user is already signed or needs to be signed in
export default function Index() {
  return (
    <div className="bg-gray-100">
      <div>Button component below....</div>
      <Button  />
      <h1 className="text-xl  text-brandblue">Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
