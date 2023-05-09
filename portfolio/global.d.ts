declare module 'pdfjs-dist/build/pdf.worker.entry';
import { PrismaClient } from '@prisma/client';

declare global {
    namespace globalThis {
        var prismadb: PrismaClient
        
    }
}