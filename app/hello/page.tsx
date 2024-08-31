"use client";

import { useState, useEffect } from 'react';

export default function HelloRust() {
    const [message, setMessage] = useState<string>('');
    const [timestamp, setTimestamp] = useState<number | null>(null);

    useEffect(() => {
        fetch('/api/hello')
            .then(response => response.json())
            .then(data => {
                setMessage(data.message);
                setTimestamp(data.timestamp);
            });
    }, []);

    return (
        <div>
            <p>{message}</p>
            <p>Timestamp: {timestamp}</p>
        </div>
    );
}