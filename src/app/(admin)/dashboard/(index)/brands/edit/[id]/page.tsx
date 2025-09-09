import { Tedit } from "@/types";
import React from "react";
import FormBrand from "../../_components/form-brand";
import { redirect } from "next/navigation";
import { getBrandById } from "../../lib/data";

export default async function EditPage({ params }: Tedit) {
	const brand = await getBrandById(params.id);

	if (!brand) {
		return redirect("/dashboard/brands");
	}

	return <FormBrand type="EDIT" data={brand} />;
}
