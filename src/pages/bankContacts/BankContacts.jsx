import React, { useState } from 'react';
import {
  Search,
  Phone,
  Mail,
  Globe,
  MapPin,
  Building2,
  Users,
  Star,
  ExternalLink,
  Filter,
  Grid,
  List,
  Clock,
  Shield,
  Briefcase,
  TrendingUp,
} from 'lucide-react';
import Header from '../../ui/Header';

const BankContacts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  const banks = [
    {
      id: 1,
      name: 'Habib Bank Limited',
      shortName: 'HBL',
      category: 'commercial',
      logo: '🏦',
      phone: '+92-21-111-111-425',
      email: 'customer.services@hbl.com',
      website: 'www.hbl.com',
      address: 'HBL Plaza, I.I. Chundrigar Road, Karachi',
      services: [
        'Personal Banking',
        'Corporate Banking',
        'Islamic Banking',
        'Investment Banking',
      ],
      established: '1941',
      branches: '1,700+',
      rating: 4.2,
      customers: '15M+',
      assets: '$20B+',
    },
    {
      id: 2,
      name: 'United Bank Limited',
      shortName: 'UBL',
      category: 'commercial',
      logo: '🏛️',
      phone: '+92-21-111-825-888',
      email: 'customercare@ubl.com.pk',
      website: 'www.ubl.com.pk',
      address: 'UBL Building, Jinnah Avenue, Blue Area, Islamabad',
      services: [
        'Retail Banking',
        'Corporate Banking',
        'Treasury Services',
        'Digital Banking',
      ],
      established: '1959',
      branches: '1,400+',
      rating: 4.0,
      customers: '12M+',
      assets: '$18B+',
    },
    {
      id: 3,
      name: 'National Bank of Pakistan',
      shortName: 'NBP',
      category: 'government',
      logo: '🏦',
      phone: '+92-21-99220081-90',
      email: 'callcenter@nbp.com.pk',
      website: 'www.nbp.com.pk',
      address: 'NBP Head Office, I.I. Chundrigar Road, Karachi',
      services: [
        'Commercial Banking',
        'Investment Banking',
        'Islamic Banking',
        'International Banking',
      ],
      established: '1949',
      branches: '1,450+',
      rating: 3.8,
      customers: '18M+',
      assets: '$22B+',
    },
    {
      id: 4,
      name: 'Allied Bank Limited',
      shortName: 'ABL',
      category: 'commercial',
      logo: '🏢',
      phone: '+92-42-111-225-225',
      email: 'customercare@abl.com',
      website: 'www.abl.com',
      address: '23-Nasir Block, Commercial Area, DHA, Lahore',
      services: [
        'Consumer Banking',
        'Corporate Banking',
        'Islamic Banking',
        'Investment Services',
      ],
      established: '1942',
      branches: '900+',
      rating: 4.1,
      customers: '8M+',
      assets: '$12B+',
    },
    {
      id: 5,
      name: 'MCB Bank Limited',
      shortName: 'MCB',
      category: 'commercial',
      logo: '🏪',
      phone: '+92-42-111-000-622',
      email: 'contactcenter@mcb.com.pk',
      website: 'www.mcb.com.pk',
      address: 'MCB Centre, Main Gulberg, Lahore',
      services: [
        'Retail Banking',
        'Corporate Banking',
        'Investment Banking',
        'Digital Services',
      ],
      established: '1947',
      branches: '1,400+',
      rating: 4.3,
      customers: '10M+',
      assets: '$16B+',
    },
    {
      id: 6,
      name: 'Standard Chartered Bank',
      shortName: 'SCB',
      category: 'multinational',
      logo: '🌍',
      phone: '+92-21-111-478-262',
      email: 'contact.pakistan@sc.com',
      website: 'www.sc.com/pk',
      address: 'Standard Chartered Building, I.I. Chundrigar Road, Karachi',
      services: [
        'Personal Banking',
        'Corporate Banking',
        'Private Banking',
        'Investment Banking',
      ],
      established: '1863',
      branches: '100+',
      rating: 4.5,
      customers: '2M+',
      assets: '$8B+',
    },
    {
      id: 7,
      name: 'Meezan Bank Limited',
      shortName: 'Meezan',
      category: 'islamic',
      logo: '🕌',
      phone: '+92-21-111-331-331',
      email: 'customercare@meezanbank.com',
      website: 'www.meezanbank.com',
      address: 'Meezan House, C-25, Estate Avenue, SITE, Karachi',
      services: [
        'Islamic Banking',
        'Corporate Banking',
        'Investment Services',
        'Trade Finance',
      ],
      established: '1997',
      branches: '800+',
      rating: 4.4,
      customers: '6M+',
      assets: '$10B+',
    },
    {
      id: 8,
      name: 'Bank Alfalah Limited',
      shortName: 'Alfalah',
      category: 'commercial',
      logo: '🏦',
      phone: '+92-21-111-225-225',
      email: 'customercare@bankalfalah.com',
      website: 'www.bankalfalah.com',
      address: 'B.A. Building, I.I. Chundrigar Road, Karachi',
      services: [
        'Consumer Banking',
        'Corporate Banking',
        'Islamic Banking',
        'Investment Banking',
      ],
      established: '1992',
      branches: '700+',
      rating: 4.0,
      customers: '5M+',
      assets: '$9B+',
    },
  ];

  const categories = [
    { value: 'all', label: 'All Banks', icon: Building2, count: banks.length },
    {
      value: 'commercial',
      label: 'Commercial',
      icon: Briefcase,
      count: banks.filter((b) => b.category === 'commercial').length,
    },
    {
      value: 'islamic',
      label: 'Islamic',
      icon: Shield,
      count: banks.filter((b) => b.category === 'islamic').length,
    },
    {
      value: 'government',
      label: 'Government',
      icon: Users,
      count: banks.filter((b) => b.category === 'government').length,
    },
    {
      value: 'multinational',
      label: 'International',
      icon: Globe,
      count: banks.filter((b) => b.category === 'multinational').length,
    },
  ];

  const filteredBanks = banks.filter((bank) => {
    const matchesSearch =
      bank.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bank.services.some((service) =>
        service.toLowerCase().includes(searchTerm.toLowerCase())
      );
    const matchesCategory =
      selectedCategory === 'all' || bank.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Simplified getCategoryConfig as some direct colors will be used
  const getCategoryConfig = (category) => {
    const configs = {
      commercial: {
        bg: 'bg-[#ea5547]/5', // Using arbitrary value for background with opacity
        border: 'border-[#ea5547]/20', // Using arbitrary value for border with opacity
        text: 'text-[#ea5547]', // Using arbitrary value for text
      },
      islamic: {
        bg: 'bg-[#434143]/5',
        border: 'border-[#434143]/20',
        text: 'text-[#434143]',
      },
      government: {
        bg: 'bg-purple-50', // Keeping default Tailwind colors for others
        border: 'border-purple-200',
        text: 'text-purple-700',
      },
      multinational: {
        bg: 'bg-orange-50', // Keeping default Tailwind colors for others
        border: 'border-orange-200',
        text: 'text-orange-700',
      },
    };
    return (
      configs[category] || {
        bg: 'bg-gray-50',
        border: 'border-gray-200',
        text: 'text-gray-700',
      }
    );
  };

  const GridView = () => (
    <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
      {filteredBanks.map((bank) => {
        const categoryConfig = getCategoryConfig(bank.category);
        return (
          <div
            key={bank.id}
            className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Header with gradient */}
            <div
              className={`${categoryConfig.bg} ${categoryConfig.border} border-b px-6 py-4`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-2xl shadow-sm">
                    {bank.logo}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {bank.shortName}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${categoryConfig.bg} ${categoryConfig.text}`}
                      >
                        {bank.category.charAt(0).toUpperCase() +
                          bank.category.slice(1)}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs font-medium text-gray-600">
                          {bank.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-500">Est.</div>
                  <div className="font-semibold text-gray-700">
                    {bank.established}
                  </div>
                </div>
              </div>
            </div>

            {/* Bank Stats */}
            <div className="grid grid-cols-3 gap-4 bg-gray-50 px-6 py-4">
              <div className="text-center">
                <div className="text-lg font-bold text-[#ea5547]">
                  {' '}
                  {/* Direct hex value */}
                  {bank.branches}
                </div>
                <div className="text-xs text-gray-500">Branches</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-green-600">
                  {bank.customers}
                </div>
                <div className="text-xs text-gray-500">Customers</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-[#434143]">
                  {' '}
                  {/* Direct hex value */}
                  {bank.assets}
                </div>
                <div className="text-xs text-gray-500">Assets</div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-4 p-6">
              <div className="space-y-3">
                <div className="flex items-center space-x-3 transition-colors group-hover:text-[#ea5547]">
                  {' '}
                  {/* Direct hex value */}
                  <Phone className="h-4 w-4 flex-shrink-0 text-[#ea5547]" />{' '}
                  {/* Direct hex value */}
                  <span className="text-sm font-medium">{bank.phone}</span>
                </div>
                <div className="flex items-center space-x-3 transition-colors group-hover:text-[#ea5547]">
                  {' '}
                  {/* Direct hex value */}
                  <Mail className="h-4 w-4 flex-shrink-0 text-[#ea5547]" />{' '}
                  {/* Direct hex value */}
                  <span className="truncate text-sm">{bank.email}</span>
                </div>
                <div className="flex items-center space-x-3 transition-colors group-hover:text-[#ea5547]">
                  {' '}
                  {/* Direct hex value */}
                  <Globe className="h-4 w-4 flex-shrink-0 text-[#ea5547]" />{' '}
                  {/* Direct hex value */}
                  <span className="text-sm">{bank.website}</span>
                </div>
              </div>

              {/* Services */}
              <div>
                <h4 className="mb-2 text-sm font-semibold text-gray-900">
                  Services
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {bank.services.slice(0, 2).map((service, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700"
                    >
                      {service}
                    </span>
                  ))}
                  {bank.services.length > 2 && (
                    <span className="inline-flex items-center rounded-full bg-[#ea5547]/10 px-2.5 py-1 text-xs font-medium text-[#ea5547]">
                      {' '}
                      {/* Direct hex values with opacity */}+
                      {bank.services.length - 2} more
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex border-t border-gray-100 bg-gray-50">
              <button className="flex flex-1 items-center justify-center space-x-2 py-3 text-sm font-medium text-[#ea5547] transition-colors hover:bg-[#ea5547]/5">
                {' '}
                {/* Direct hex values with opacity */}
                <Phone className="h-4 w-4" />
                <span>Call</span>
              </button>
              <button className="flex flex-1 items-center justify-center space-x-2 border-l border-gray-200 py-3 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100">
                <ExternalLink className="h-4 w-4" />
                <span>Visit</span>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );

  const ListView = () => (
    <div className="space-y-4">
      {filteredBanks.map((bank) => {
        const categoryConfig = getCategoryConfig(bank.category);
        return (
          <div
            key={bank.id}
            className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
          >
            <div className="flex items-center space-x-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gray-50 text-3xl">
                {bank.logo}
              </div>
              <div className="space-y-1">
                <div className="flex items-center space-x-3">
                  <h3 className="text-lg font-bold text-gray-900">
                    {bank.name}
                  </h3>
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${categoryConfig.bg} ${categoryConfig.text}`}
                  >
                    {bank.category.charAt(0).toUpperCase() +
                      bank.category.slice(1)}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium text-gray-600">
                      {bank.rating}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-6 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Phone className="h-4 w-4" />
                    <span>{bank.phone}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Building2 className="h-4 w-4" />
                    <span>{bank.branches} Branches</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{bank.customers} Customers</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button className="rounded-lg bg-[#ea5547] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#d5443b]">
                {' '}
                {/* Direct hex value and a slightly darker one for hover */}
                Contact
              </button>
              <button className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
                Details
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <>
      <Header>
        {{
          headingText: 'Refund Policy',
        }}
      </Header>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-8">
          {/* Search and Controls */}
          <div className="mb-8 space-y-6">
            {/* Search Bar */}
            <div className="relative mx-auto max-w-2xl">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search banks, services, or contact information..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-2xl border border-gray-300 bg-white py-4 pl-12 pr-6 shadow-sm transition duration-200 focus:border-[#ea5547] focus:outline-none focus:ring-4 focus:ring-[#ea5547]/10" // Direct hex value with opacity
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => {
                const Icon = category.icon;
                let buttonBg =
                  'bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50';
                let buttonActiveBg = 'scale-105 shadow-lg';

                // Determine colors based on category for the active state
                if (selectedCategory === category.value) {
                  if (category.value === 'commercial') {
                    buttonActiveBg += ' bg-[#ea5547] text-white'; // Direct hex value
                  } else if (category.value === 'islamic') {
                    buttonActiveBg += ' bg-[#434143] text-white'; // Direct hex value
                  } else {
                    buttonActiveBg += ' bg-gray-700 text-white'; // Fallback for other active categories
                  }
                } else {
                  // For inactive categories, we can set specific colors
                  if (category.value === 'commercial') {
                    buttonBg =
                      'border border-[#ea5547]/20 bg-[#ea5547]/5 text-[#ea5547] hover:border-[#ea5547]/30 hover:bg-[#ea5547]/10';
                  } else if (category.value === 'islamic') {
                    buttonBg =
                      'border border-[#434143]/20 bg-[#434143]/5 text-[#434143] hover:border-[#434143]/30 hover:bg-[#434143]/10';
                  }
                  // Default for others remains
                }

                return (
                  <button
                    key={category.value}
                    onClick={() => setSelectedCategory(category.value)}
                    className={`flex items-center space-x-2 rounded-xl px-4 py-2.5 font-medium transition-all duration-200 ${
                      selectedCategory === category.value
                        ? buttonActiveBg
                        : buttonBg
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{category.label}</span>
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs ${
                        selectedCategory === category.value
                          ? 'bg-white/20'
                          : 'bg-gray-100'
                      }`}
                    >
                      {category.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* View Controls and Results */}
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600">
                <span className="font-medium">{filteredBanks.length}</span> of{' '}
                <span className="font-medium">{banks.length}</span> banks found
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">View:</span>
                <div className="flex rounded-lg border border-gray-200 bg-white p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`rounded-md p-2 transition-colors ${
                      viewMode === 'grid'
                        ? 'bg-[#ea5547]/10 text-[#ea5547]' // Direct hex values with opacity
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <Grid className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`rounded-md p-2 transition-colors ${
                      viewMode === 'list'
                        ? 'bg-[#ea5547]/10 text-[#ea5547]' // Direct hex values with opacity
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <List className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          {filteredBanks.length > 0 ? (
            viewMode === 'grid' ? (
              <GridView />
            ) : (
              <ListView />
            )
          ) : (
            <div className="py-16 text-center">
              <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gray-100">
                <Search className="h-10 w-10 text-gray-400" />
              </div>
              <h3 className="mb-2 text-lg font-medium text-gray-900">
                No banks found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search terms or filters
              </p>
            </div>
          )}

          {/* Info Footer */}
          <div className="mt-12 rounded-2xl border border-[#ea5547]/20 bg-gradient-to-r from-[#ea5547]/5 to-[#434143]/5 p-6">
            {' '}
            {/* Direct hex values with opacity */}
            <div className="flex items-start space-x-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ea5547]/10">
                {' '}
                {/* Direct hex value with opacity */}
                <Clock className="h-5 w-5 text-[#ea5547]" />{' '}
                {/* Direct hex value */}
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-[#ea5547]">
                  {' '}
                  {/* Direct hex value */}
                  Important Notice
                </h3>
                <p className="text-sm leading-relaxed text-[#434143]">
                  {' '}
                  {/* Direct hex value */}
                  All contact information is regularly updated for accuracy. For
                  the most current details and branch-specific information,
                  please visit the respective bank's official website or contact
                  their customer service directly. Banking hours and services
                  may vary by location.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BankContacts;
