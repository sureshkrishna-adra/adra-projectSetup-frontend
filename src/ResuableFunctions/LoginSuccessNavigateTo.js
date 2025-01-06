export function LoginSuccessNavigateTo(user_role, navigate) {
    switch (user_role) {
        case "interview_candidate":
            navigate("/candidates_home");
            break;

        default:
            break;
    }
}