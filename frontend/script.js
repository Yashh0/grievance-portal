// Change this to your backend's Render URL after deployment
const BACKEND_URL = "https://grievance-portal-rr47.onrender.com";

document.getElementById('grievanceForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const message = document.getElementById('message').value;
    const mood = document.getElementById('mood').value;

    try {
        const res = await fetch(`${BACKEND_URL}/api/grievances`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, message, mood })
        });

        const data = await res.json();
        if (data.success) {
            alert('Grievance submitted successfully!');
            e.target.reset();
        } else {
            alert('Error: ' + (data.error || 'Something went wrong'));
        }
    } catch (err) {
        console.error(err);
        alert('Failed to submit grievance. Check console for details.');
    }
});
