(() => {
	const blog = new Blogr(BLOG_URL, API_OPTS);

	function el(id) {
		return document.getElementById(id);
	}

	function formatDate(iso) {
		return iso ? iso.slice(0, 10) : "";
	}

	function renderLabels(labels) {
		if (!labels || labels.length === 0) return "";
		const shown = labels.slice(0, 4);
		const rest = labels.length - shown.length;
		return `
			<span class="author-card__labels">
				${shown.map((l) => `<span class="author-card__label">${escapeHtml(l)}</span>`).join("")}
				${rest > 0 ? `<span class="author-card__label">+${rest} more</span>` : ""}
			</span>
		`;
	}

	function renderAuthorGrid(container, authors) {
		if (authors.length === 0) {
			container.innerHTML = emptyBox("No authors found.");
			return;
		}
		container.innerHTML = authors
			.map((a) => {
				const dateRange =
					a.firstPostDate && a.lastPostDate
						? a.firstPostDate === a.lastPostDate
							? formatDate(a.firstPostDate)
							: `${formatDate(a.firstPostDate)} – ${formatDate(a.lastPostDate)}`
						: "";

				return `
					<a class="author-card" href="${escapeHtml(a.url || "#")}" target="_blank" rel="noopener">
						${
							a.image
								? `<img class="author-card__avatar" src="${escapeHtml(a.image)}" alt="" />`
								: `<span class="author-card__avatar author-card__avatar--placeholder"></span>`
						}
						<span class="author-card__name">${escapeHtml(a.name)}</span>
						<span class="author-card__count">${a.totalPosts} post${a.totalPosts === 1 ? "" : "s"}</span>
						${dateRange ? `<span class="author-card__dates">${dateRange}</span>` : ""}
						${renderLabels(a.labels)}
					</a>
				`;
			})
			.join("");
	}

	async function runAuthors() {
		const status = el("authors-status");
		const out = el("authors-result");
		const sampleSize = Number(el("authors-sample-size").value);

		const options = {};
		if (!Number.isNaN(sampleSize) && sampleSize > 0)
			options.sampleSize = sampleSize;

		setStatus(status, "loading", "fetching…");
		try {
			const authors = await blog.authors(options);
			console.log({ authors });
			setStatus(
				status,
				"ok",
				`${authors.length} author(s) · ${
					options.sampleSize
						? `sampled ${options.sampleSize} posts`
						: "scanned all posts"
				}`,
			);
			renderAuthorGrid(out, authors);
		} catch (err) {
			setStatus(status, "error", "request failed");
			out.innerHTML = errorBox(err);
		}
	}

	el("authors-run").addEventListener("click", runAuthors);

	runAuthors();
})();
