// AdminLayout.jsx
import React from 'react';

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-layout">
      {/* Admin-specific layout components */}
      {children}
    </div>
  );
};

export default AdminLayout;
