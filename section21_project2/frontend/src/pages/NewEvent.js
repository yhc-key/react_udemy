import { json, redirect } from "react-router-dom";

import EventForm from "../components/EventForm";

function NewEventPage() {
  return <EventForm/>;
}

export default NewEventPage;

export async function action({ request, params }) {
  const data = await request.formData();

  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description)"),
  };
  const response = await fetch("http://localhost:8080/events", {
    method: "POST",
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });

  if (response.statue === 422) {
    return response;
  }
  if (!response.ok) {
    throw json({ message: "Could not save event." }, { statue: 500 });
  }

  return redirect('/events');
}
