interface FormProps {
    formData: {
        avatar: File | null;
        name: string;
        email: string;
        githubUsername: string;
    };
    errors: {
        avatar?: string;
        name?: string;
        email?: string;
        githubUsername?: string;
    };
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function FormComponent({ formData, errors, handleChange, handleSubmit }: FormProps) {
    return (
        <form
            onSubmit={handleSubmit}
            className="d-flex flex-column align-items-center text-white w-100 p-4"
            style={{ maxWidth: "400px", backgroundColor: "#1b1b32", borderRadius: "10px" }}
        >
            {/* Upload Avatar */}
            <div className="mb-3 w-100 file-upload-container">
                <label htmlFor="avatar" className="form-label fw-bold text-light robotic-font-text file-upload-box">
                <i className="upload-icon" > </i>
                <p>Drag and drop or click to upload</p>
                <small>Upload your photo (JPG or PNG, max size: 5MB).</small>
                </label>
            <input type="file" className="file-input" id="avatar" name="avatar" onChange={handleChange} />
            {errors.avatar && <p className="text-danger robotic-font-info">{errors.avatar}</p>}
        </div>
  
        {/* Full Name */ }
    <div className="custom-input-container">
        <label htmlFor="name" className="custom-label">Full Name</label>
        <input type="text" className="custom-input" id="name" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} />
        {errors.name && <p className="text-danger robotic-font-info"> <i className="info"> </i>{errors.name}</p>}
    </div>

    {/* Email */ }
    <div className="custom-input-container">
        <label htmlFor="email" className="custom-label">Email Address</label>
        <input type="email" className="custom-input" id="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
        {errors.email && <p className="text-danger robotic-font-info">{errors.email}</p>}
    </div>

    {/* GitHub Username */ }
    <div className="custom-input-container">
        <label htmlFor="githubUsername" className="custom-label">GitHub Username</label>
        <input type="text" className="custom-input" id="githubUsername" name="githubUsername" placeholder="@yourusername" value={formData.githubUsername} onChange={handleChange} />
        {errors.githubUsername && <p className="text-danger robotic-font-info">{errors.githubUsername}</p>}
    </div>

    {/* Submit Button */ }
    <button type="submit" className="btn btn-danger w-100 rounded-pill robotic-font-info mt-4">Generate My Ticket</button>
      </form >
  
    );
}
