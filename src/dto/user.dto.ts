export type createUserDto = {
    name: string;
    email: string;
    phoneNumber: string;
    password: string;
};

export type updateUserDto = {
    name?: string;
    email?: string;
    phoneNumber?: string;
    password?: string;
}

export type signInDto = {
    email: string;
    password: string;
}
