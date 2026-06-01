import Card from "./components/Card";


export default function App() {
  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto space-y-5 max-w-3xl ">

        <Card
          variant="profile"
          avatar="https://i.pravatar.cc/150?img=12"
          name="John Doe"
          role="Frontend Developer"
        />

        <div className="grid grid-cols-2 gap-6">
          <Card
            variant="media"
            image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
            title="React Course"
            description="Learn React from beginner to advanced level."
          />
          <Card
            variant="media"
            image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
            title="React Course"
            description="Learn React from beginner to advanced level."
          />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <Card
            variant="stats"
            label="Total Users"
            value="12,540"
          />
          <Card
            variant="stats"
            label="Total Revenue"
            value="$20,540"
          />
        </div>

      </div>
    </div>
  )
}
