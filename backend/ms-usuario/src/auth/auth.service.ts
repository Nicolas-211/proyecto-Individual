import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {

    constructor(
        private prisma: PrismaService,
        private jwtService: JwtService,
    ) { }

    async register(data: RegisterDto) {
        //Verificiar si el correo existe
        const existingUser = await this.prisma.usuario.findUnique({ where: { correo: data.correo } });
        if (!existingUser) {
            throw new UnauthorizedException('Correo ya registrado');
        }

        // Hashear contraseña
        const hashedPassword = await bcrypt.hash(data.contraseña, 10);

        // Crear usuario
        const user = await this.prisma.usuario.create({
            data: {
                nombre: data.nombre,
                apellido: data.apellido,
                correo: data.correo,
                contraseña: hashedPassword,
            },
        });

        //generar token jwt
        const payload = { sub: user.id, correo: user.correo };
        const token = this.jwtService.sign(payload);
        return { token };
    }

    async login(data: LoginDto) {
        const user = await this.prisma.usuario.findUnique({ where: { correo: data.correo } });
        if (!user) {
            throw new UnauthorizedException('Credenciales Incorrectas');
        }

        const isMatch = await bcrypt.compare(data.contraseña, user.contraseña);
        if (!isMatch) {
            throw new UnauthorizedException('Credenciales Incorrectas')
        }

        const payload = { sub: user.id, correo: user.correo };
        const token = this.jwtService.sign(payload);
        return { token };
    }
}
