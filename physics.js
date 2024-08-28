function getAcceleration(data) {
    const { f, m, Δv, Δt, t, d } = data;

    // Check if force and mass are provided
    if (f !== undefined && m !== undefined) {
        return f / m;
    }

    // Check if change in velocity and time are provided
    if (Δv !== undefined && Δt !== undefined) {
        return Δv / Δt;
    }

    // Check if distance and time are provided
    if (d !== undefined && t !== undefined && t !== 0) {
        return 2 * d / (t * t);
    }

    return "impossible";
}