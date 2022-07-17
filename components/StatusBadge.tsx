import path from "path";

interface StatusBadageProps {
  name: string;
  type:
    | "response-time-day"
    | "response-time-month"
    | "response-time-week"
    | "response-time-year"
    | "response-time"
    | "uptime-day"
    | "uptime-month"
    | "uptime-week"
    | "uptime-year"
    | "uptime";
}

const StatusBadage = (props: StatusBadageProps) => {
  const url = new URL("/endpoint", "https://img.shields.io");
  const username = "liblaf";
  const repo_name = "upptime";
  const branch_name = "master";
  url.searchParams.set(
    /*name=*/ "url",
    new URL(
      path.join(
        "/",
        username,
        repo_name,
        branch_name,
        "api",
        props.name,
        props.type + ".json"
      ),
      "https://raw.githubusercontent.com"
    ).toString()
  );
  console.log(url.toString());
  return <img alt="Uptime" src={url.toString()}></img>;
};

export default StatusBadage;
