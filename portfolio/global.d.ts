
import { PrismaClient } from '@prisma/client';
declare module 'pdfjs-dist/build/pdf.worker.entry';
declare global {
    
    namespace globalThis {
        var prismadb: PrismaClient
        
    }
}