import { useState, useEffect } from 'react';
import { GitHubUser } from '../types/user';

const USERNAMES = ["owaismohammed79", "gaearon", "addyosmani"];

export const useUsers = () => {
  const [users, setUsers] = useState<GitHubUser[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const requests = USERNAMES.map(async (username) => {
          const res = await fetch(`https://api.github.com/users/${username}`);
          const data = await res.json();
          return {
            name: data.name || data.login,
            role: "Tech Lead",
            imgUrl: data.avatar_url,
          };
        });

        const results = await Promise.all(requests);
        setUsers(results);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, []);

  return { users, loading };
};