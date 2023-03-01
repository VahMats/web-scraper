import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

const documents = {
  id: 'default',
  type: 'group',
  children: [
    {
      id: 'documents',
      title: 'Documents',
      type: 'item',
      url: '/documents',
      icon: InsertDriveFileIcon,
      breadcrumbs: false
    }
  ]
};

export default documents;
