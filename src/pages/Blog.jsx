// Add missing import
import { Table } from 'antd';
import React, { useState, useMemo } from 'react';
import { Input, Select, Button, Tag, Typography, Card, Row, Col } from 'antd'; // 修改导入
import AppleCard from '../components/atoms/AppleCard';
import { articles } from '../utils/articles';
import { useLocale } from '../contexts/LocaleContext';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'; // 添加媒体查询钩子
const { Search } = Input;
const { Option } = Select;
const { Text } = Typography;

const PAGE_SIZE = 5;

const Blog = () => {
  const { t } = useLocale();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [page, setPage] = useState(1);
  // 添加移动设备检测
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const filtered = useMemo(() => {
    let data = articles;
    if (category !== 'all') data = data.filter(a => a.category === t(category) || a.category === category);
    if (search) data = data.filter(a => a.title.includes(search) || a.content.includes(search));
    return data;
  }, [search, category, t]);

  const paged = useMemo(() => filtered.slice((page-1)*PAGE_SIZE, page*PAGE_SIZE), [filtered, page]);

  const columns = [
    { title: t('blog'), dataIndex: 'title', key: 'title', render: (text, record) => <b>{text}</b> },
    { title: t('allCategories'), dataIndex: 'category', key: 'category', render: c => <Tag color="blue">{c}</Tag> },
    { title: t('tags'), dataIndex: 'tags', key: 'tags', render: tags => tags?.map(tag => <Tag key={tag}>{tag}</Tag>) },
    { title: t('author') || '作者', dataIndex: 'author', key: 'author', render: a => <Text type="secondary">{a}</Text> },
    { title: t('date') || '日期', dataIndex: 'date', key: 'date', render: d => dayjs(d).format('YYYY-MM-DD') },
    { 
      title: t('action') || '操作', 
      key: 'action', 
      render: (_, record) => (
        <Button 
          type="link"
          onClick={() => navigate(`/article/${record.id}`)} // 添加点击导航事件
        >
          {t('view') || '查看'}
        </Button>
      ) 
    },
  ];

  return (
    <div className="py-8 px-0">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 px-4">
        <Search placeholder={t('searchPlaceholder')} style={{ width: '100% md:w-240' }} enterButton allowClear value={search} onChange={e => {setSearch(e.target.value); setPage(1);}} />
        <Select value={category} style={{ width: '100% md:w-140' }} onChange={v => {setCategory(v); setPage(1);}}>
          <Option value="all">{t('allCategories')}</Option>
          <Option value="前端">{t('frontend')}</Option>
          <Option value="新闻">新闻</Option>
          <Option value="生活">生活</Option>
          <Option value="产品">产品</Option>
        </Select>
      </div>

      <AppleCard>
        {/* 移动端使用卡片布局，PC端使用表格布局 */}
        {isMobile ? (
          <Row gutter={[16, 16]} className="p-4">
            {paged.map(record => (
              <Col xs={24} key={record.id}>
                <Card
                  bordered
                  hoverable
                  onClick={() => navigate(`/article/${record.id}`)}
                  className="cursor-pointer transition-all duration-300 hover:shadow-md"
                >
                  <div className="flex justify-between items-start mb-2">
                    <Typography.Title level={5} style={{ margin: 0 }}>{record.title}</Typography.Title>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Tag color="blue">{record.category}</Tag>
                    {record.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{record.author}</span>
                    <span>{dayjs(record.date).format('YYYY-MM-DD')}</span>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          <Table
            columns={columns}
            dataSource={paged}
            pagination={false}
            locale={{ emptyText: t('noArticles') }}
            rowKey="id"
          />
        )}
        <div className="flex justify-center mt-6">
          <Button disabled={page === 1} onClick={() => setPage(p => p-1)} style={{ marginRight: 8 }}>{'<'}</Button>
          <span style={{ lineHeight: '32px', minWidth: 60, textAlign: 'center' }}>{page} / {Math.ceil(filtered.length / PAGE_SIZE) || 1}</span>
          <Button disabled={page === Math.ceil(filtered.length / PAGE_SIZE) || filtered.length === 0} onClick={() => setPage(p => p+1)}>{'>'}</Button>
        </div>
      </AppleCard>
    </div>
  );
};

export default Blog;
