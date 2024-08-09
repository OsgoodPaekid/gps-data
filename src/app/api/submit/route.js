import { NextResponse } from 'next/server';
import { getDb } from '../../../../lib/db';

export async function POST(request) {
  const db = await getDb();
  const { name, gps, date, location, tel, processing, tracking, reference, region, service } = await request.json();

  try {
    await db.run(`
      INSERT INTO gps_data (name, gps, date, location, tel, processing, tracking, reference, region, service)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [name, gps, date, location, tel, processing, tracking, reference, region, service]);

    return NextResponse.json({ message: 'Data inserted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error inserting data:', error);
    return NextResponse.json({ message: 'Error inserting data' }, { status: 500 });
  }
}