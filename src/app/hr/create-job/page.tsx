import React from "react";
import CreateJob from "@/components/CreateJob";

// This is a server action
// async function submitJob(formData: FormData) {
//     'use server';
//     console.log('Form submitted:', formData);
//     // Add your form submission logic here
//     // This runs on the server
// }

const HRPage: React.FC = () => {
    return <CreateJob />;
};

export default HRPage;