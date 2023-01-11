import { useState } from "react";
import { Dropdown, Form } from "react-bootstrap";

interface Props {
	filters: string[];
	selectedFilters: string[];
	onFilterSelectionChanged: (newFilters: string[]) => void;
}

const FilterDropdown: React.FC<Props> = ({ filters, selectedFilters, onFilterSelectionChanged }) => {
	const [searchQuery, setSearchQuery] = useState("");
	const filteredFilters = filters.filter((filter) => filter.startsWith(searchQuery));

	const selectFilter = (filter: string) => {
		// If the filter is already selected, remove it from the array. Otherwise, add it.
		// This passes to its parent the updated selected filters
		onFilterSelectionChanged(
			selectedFilters.includes(filter)
				? selectedFilters.filter((selectedFilter) => selectedFilter !== filter)
				: [...selectedFilters, filter]
		);
	};

	return (
		<Dropdown autoClose="outside">
			<Dropdown.Toggle>Filter</Dropdown.Toggle>
			<Dropdown.Menu className="bg-secondary border-primary p-2">
				<Form.Control
					autoFocus
					placeholder="Type to filter..."
					value={searchQuery}
					onChange={(event) => setSearchQuery(event.target.value)}
				/>

				<Dropdown.Divider />

				{filteredFilters.map((filter) => (
					<Dropdown.Item
						key={filter}
						className="text-white"
						onClick={() => {
							selectFilter(filter);
						}}
					>
						<Form.Check
							type="checkbox"
							label={filter}
							checked={selectedFilters.includes(filter)}
							onChange={() => {
								selectFilter(filter);
							}}
						/>
					</Dropdown.Item>
				))}
			</Dropdown.Menu>
		</Dropdown>
	);
};

export default FilterDropdown;
