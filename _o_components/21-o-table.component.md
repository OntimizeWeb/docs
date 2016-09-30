 ---
title: "Table"
permalink: /components/o-table.component/
comp: table
---

{% include base_path %}

**WARNING: table is storing changes made by user (show/hide columns, order changes, filters, etc.) in the browser local storage. That values will take precedence over table html definition.**
For example: if a 'ID' column is not in the 'visible-columns' attribute but the user has chosen to display it manually, it will be visible in future loads. For restoring initial state is enough to delete it 'DataTables' entries in browswer local storage.
