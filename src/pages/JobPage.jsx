import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import { useParams } from "react-router-dom";

const JobPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(`http://localhost:3000/jobs/${id}`);
        const data = await res.json();
        setJob(data);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, []);

  return loading ? <Spinner /> : <h1>{job.title}</h1>;
};

export default JobPage;
