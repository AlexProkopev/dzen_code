const PaginationControls = ({ page, totalPages, onPageChange }) => (
  <div className=" d-flex justify-content-between align-items-center pt-4 pb-5 px-4">
    <button
      className="btn btn-sm btn-outline-secondary"
      onClick={() => onPageChange(page - 1)}
      disabled={page === 1}
    >
      ← Назад
    </button>
    <span className="small text-muted">
      Страница {page} из {totalPages}
    </span>
    <button
      className="btn btn-sm btn-outline-secondary"
      onClick={() => onPageChange(page + 1)}
      disabled={page === totalPages}
    >
      Вперёд →
    </button>
  </div>
);

export default PaginationControls;
