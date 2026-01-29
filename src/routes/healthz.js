
import { getPrisma } from '../lib/prisma.js';

export async function healthz(req, res) {
  console.log('DATABASE_URL:', process.env.DATABASE_URL);

  try {
    const prisma = getPrisma();
    await prisma.$queryRaw`SELECT 1`;
    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Healthz DB error:', err);
    res.status(500).json({
      ok: false,
    });
  }
}

