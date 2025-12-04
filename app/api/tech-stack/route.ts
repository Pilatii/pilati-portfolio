import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";

const notion = new Client({
	auth: process.env.NOTION_TOKEN,
});

const databaseId = process.env.TECH_DATABASE_ID as string;

export async function GET() {

	try {
		const response = await notion.databases.query({
			database_id: databaseId,
			sorts: [
				{ timestamp: "created_time", direction: "ascending" }
			]
		});

		const projects = response.results.map((row: any) => ({
			id: row.id,
			name: row.properties.Name?.title?.[0]?.plain_text ?? "",
		}));

		return NextResponse.json({ projects });
	} catch (error) {
		console.error("Erro ao consultar Notion:", error);
		return NextResponse.json(
			{ error: "Erro ao consultar Notion" },
			{ status: 500 }
		);
	}
}
