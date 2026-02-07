import { useState } from 'react';
import Layout from '@/components/Layout';
import { Container, Row, Col, Form, InputGroup, Button } from 'react-bootstrap';
import NutritionCard from '@/components/nutrition/NutritionCard';
import { nutritionTips } from '@/data/nutritionTips';
import { FaSearch, FaAppleAlt, FaLeaf, FaFire, FaDumbbell, FaHeart, FaSeedling } from 'react-icons/fa';

type CategoryFilter = 'all' | 'general' | 'weight-loss' | 'muscle-gain' | 'recovery' | 'vegetarian';

const NutritionTips = () => {
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredTips = nutritionTips.filter(tip => {
    const matchesCategory = categoryFilter === 'all' || tip.category === categoryFilter;
    const matchesSearch = tip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tip.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = [
    { value: 'all', label: 'All', icon: <FaAppleAlt /> },
    { value: 'vegetarian', label: 'Vegetarian', icon: <FaSeedling /> },
    { value: 'general', label: 'General', icon: <FaLeaf /> },
    { value: 'weight-loss', label: 'Weight Loss', icon: <FaFire /> },
    { value: 'muscle-gain', label: 'Muscle Gain', icon: <FaDumbbell /> },
    { value: 'recovery', label: 'Recovery', icon: <FaHeart /> }
  ];

  return (
    <Layout title="Nutrition Tips - FitMonk">
      {/* Hero Section */}
      <div
        className="py-5"
        style={{
          background: 'linear-gradient(135deg, #fdf4ff 0%, #fce7f3 50%, #fdf4ff 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div
          className="position-absolute animate-float"
          style={{
            width: '200px',
            height: '200px',
            background: 'linear-gradient(135deg, rgba(240, 147, 251, 0.15) 0%, rgba(245, 87, 108, 0.1) 100%)',
            borderRadius: '50%',
            top: '-50px',
            left: '10%'
          }}
        />
        <Container style={{ position: 'relative', zIndex: 1 }}>
          <div className="text-center py-4">
            <span
              className="mb-3 d-inline-block px-4 py-2 rounded-pill fw-semibold"
              style={{
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                color: 'white',
                fontSize: '0.85rem'
              }}
            >
              <FaAppleAlt className="me-2" /> NUTRITION TIPS
            </span>
            <h1 className="display-5 fw-bold mb-3">
              Fuel Your <span style={{
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>Body Right</span>
            </h1>
            <p className="lead text-muted mb-5 mx-auto" style={{ maxWidth: '700px' }}>
              Explore our nutrition articles to learn how to fuel your body for optimal
              performance, recovery, and results. Proper nutrition is key to achieving
              your fitness goals.
            </p>

            {/* Search */}
            <Row className="justify-content-center mb-4">
              <Col md={6} lg={5}>
                <div className="position-relative">
                  <Form.Control
                    placeholder="Search nutrition tips..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                      paddingLeft: '45px',
                      borderRadius: '14px',
                      border: '2px solid #e2e8f0',
                      padding: '14px 18px 14px 45px'
                    }}
                  />
                  <FaSearch
                    className="position-absolute text-muted"
                    style={{ left: '16px', top: '50%', transform: 'translateY(-50%)' }}
                  />
                </div>
              </Col>
            </Row>

            {/* Category Pills */}
            <div className="d-flex flex-wrap justify-content-center gap-2">
              {categories.map(cat => (
                <button
                  key={cat.value}
                  className={`btn px-4 py-2 rounded-pill fw-medium d-flex align-items-center gap-2`}
                  onClick={() => setCategoryFilter(cat.value as CategoryFilter)}
                  style={{
                    transition: 'all 0.3s ease',
                    background: categoryFilter === cat.value
                      ? 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
                      : 'white',
                    color: categoryFilter === cat.value ? 'white' : '#64748b',
                    border: categoryFilter === cat.value ? 'none' : '1px solid #e2e8f0',
                    boxShadow: categoryFilter === cat.value ? '0 4px 15px rgba(240, 147, 251, 0.3)' : 'none'
                  }}
                >
                  {cat.icon} {cat.label}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* Nutrition Tips Grid */}
      <div className="py-5" style={{ background: '#f8fafc' }}>
        <Container>
          <Row className="g-4">
            {filteredTips.length > 0 ? (
              filteredTips.map(tip => (
                <Col key={tip.id} md={6} lg={4}>
                  <NutritionCard tip={tip} />
                </Col>
              ))
            ) : (
              <Col className="text-center py-5">
                <div
                  className="p-5 rounded-4"
                  style={{ background: 'white' }}
                >
                  <FaAppleAlt size={48} className="text-muted mb-3" />
                  <h4 className="fw-bold">No nutrition tips found</h4>
                  <p className="text-muted">Try changing your search term or category filter.</p>
                </div>
              </Col>
            )}
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export default NutritionTips;