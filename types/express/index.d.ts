import { JwtPayload } from "jsonwebtoken"; // or whatever the decoded token returns
import { roleDto, signInDto } from "../../src/dto/user.dto";

declare global {
    namespace Express {
        interface Request {
            user: signInDto;
        }
    }
}
