"use client";

import { useState } from "react";

import { api } from "~/trpc/react";
import { Input } from "~/app/_components/ui/input";

export function LatestEvents() {
  const { data: latestPosts } = api.event.getLatest.useQuery();
  const currentUser = { id: "" }; // TODO: get real user
  const location = 1; // TODO: get real location

  const utils = api.useUtils();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [startAt, setStartAt] = useState("");
  const [endAt, setEndAt] = useState("");

  const createPost = api.event.create.useMutation({
    onSuccess: async () => {
      await utils.event.invalidate();
      setName("");
    },
  });

  return (
    <div className="w-full max-w-xs">
      {latestPosts ? (
        <div>
          {latestPosts.map((post) => (
            <div key={post.id} className="mb-4">
              <h3 className="text-lg font-semibold">{post.name}</h3>
              <p>{post.description}</p>
              <p>{new Date(post.startAt).toLocaleString()}</p>
              <p>{new Date(post.endAt).toLocaleString()}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No events yet.</p>
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createPost.mutate({
            name,
            description,
            startAt,
            endAt,
            createdBy: currentUser.id,
            location,
          });
        }}
        className="flex flex-col gap-2"
      >
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Input
          type="datetime-local"
          placeholder="Start At"
          value={startAt}
          onChange={(e) => setStartAt(e.target.value)}
        />
        <Input
          type="datetime-local"
          placeholder="End At"
          value={endAt}
          onChange={(e) => setEndAt(e.target.value)}
        />
        <button
          type="submit"
          className="rounded-full bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20"
          disabled={createPost.isPending}
        >
          {createPost.isPending ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
