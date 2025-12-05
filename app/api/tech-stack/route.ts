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

		const techs = response.results.map((row: any) => ({
			id: row.id,
			group: row.properties.Group?.title?.[0]?.plain_text ?? "",
			techs: row.properties.Techs?.multi_select?.map((t: any) => t.name) ?? [],
		}));

		return NextResponse.json({ techs });
	} catch (error) {
		console.error("Erro ao consultar Notion:", error);
		return NextResponse.json(
			{ error: "Erro ao consultar Notion" },
			{ status: 500 }
		);
	}
}
