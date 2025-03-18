import { useState } from "react";
import Form from "./components/Forms";
import Title from "./components/Title";

interface FormData {
  avatar: File | null;
  name: string;
  email: string;
  githubUsername: string;
}

export default function App() {
  const [formData, setFormData] = useState<FormData>({
    avatar: null,
    name: "",
    email: "",
    githubUsername: "",
  });

  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const [errors, setErrors] = useState<{ [key in keyof FormData]?: string }>({});

  const validate = () => {
    const newErrors: typeof errors = {};

    if (!formData.avatar) newErrors.avatar = "Avatar is required.";
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required.";
    if (!formData.githubUsername.trim()) newErrors.githubUsername = "GitHub username is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Full Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    if (!formData.githubUsername.trim()) newErrors.githubUsername = "GitHub username is required.";
    return newErrors;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      setSubmittedData(formData);
      setTimeout(() => {
        window.location.reload(); // Recarga la página después de mostrar los datos
      }, 3000);
    } else {
      setErrors(validationErrors);
    }
  };

  
  return  <>  
  <div className="d-flex justify-content-center align-items-center background-desktop">
    
  <i className="pattern-lines"> </i>

  <i className="lines-bottom"></i>

  <i className="lines-top"></i>

  <i className="circle"></i>
      <div className="w-100" style={{ maxWidth: "450px" }}>
        <Title title="Start your journey to Coding Conf 2025" />
        <Form formData={formData} errors={errors} handleChange={handleChange} handleSubmit={handleSubmit} />
    
        {/* Mostrar la información antes de recargar */}

        {submittedData && (
          <div className="mt-4 p-3 border border-secondary rounded bg-light text-dark">
            <h4>Submitted Data</h4>
            <p><strong>Full Name:</strong> {submittedData.name}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>GitHub Username:</strong> {submittedData.githubUsername}</p>
          </div>


        )}

       </div>


    </div>

  
  </>;
}
