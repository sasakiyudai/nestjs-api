import { AuthenticationService } from './authentication.service';
import RegisterDto from './dto/register.dto';
import RequestWithUser from './requestWithUser.interface';
import { Response } from 'express';
export declare class AuthenticationController {
    private readonly authenticationService;
    constructor(authenticationService: AuthenticationService);
    register(registrationData: RegisterDto): Promise<import("../users/user.entity").default>;
    logIn(request: RequestWithUser, response: Response): Promise<Response<any, Record<string, any>>>;
    logOut(request: RequestWithUser, response: Response): Promise<Response<any, Record<string, any>>>;
    authenticate(request: RequestWithUser): import("../users/user.entity").default;
}
