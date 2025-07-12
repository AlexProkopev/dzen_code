const TypeFilter = ({ value, onChange, options }) => {
  return (
    <form className="filter-section mb-3">
      <label htmlFor="typeFilter" className="form-label me-2">
        Фильтр по типу:
      </label>
      <select
        id="typeFilter"
        className="form-select w-auto d-inline-block"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Все типы</option>
        {options.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </form>
  );
};

export default TypeFilter;
