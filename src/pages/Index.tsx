import { ArrowRight, MessageCircle, Play, Zap, Brain, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const handleWhatsAppClick = () => {
    window.open('https://what.sapp.link/pkeday_furballiq', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">YT2Go</span>
          </div>
          <div className="text-sm text-gray-600">
            Powered by <span className="font-semibold text-blue-600">Pkeday</span>
          </div>
        </div>
      </header>

      {/* Hero Section with Background Screenshots */}
      <section className="container mx-auto px-4 py-20 relative overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Left Screenshot */}
          <div className="absolute left-8 top-16 transform -rotate-6 opacity-20 hidden lg:block">
            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-3 border border-green-200 shadow-lg w-64">
              <img 
                src="/lovable-uploads/f80428ee-dab3-4d9c-8ce7-4912052ea5f3.png" 
                alt="YouTube video summary example"
                className="w-full rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Right Screenshot */}
          <div className="absolute right-8 top-24 transform rotate-6 opacity-20 hidden lg:block">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-3 border border-blue-200 shadow-lg w-64">
              <img 
                src="/lovable-uploads/6ecfb33f-d911-4f07-81c3-554c4af48f08.png" 
                alt="Follow-up questions example"
                className="w-full rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Additional scattered images for mobile */}
          <div className="lg:hidden">
            <div className="absolute right-4 top-8 transform rotate-12 opacity-15 w-48">
              <img 
                src="/lovable-uploads/f80428ee-dab3-4d9c-8ce7-4912052ea5f3.png" 
                alt=""
                className="w-full rounded-lg"
              />
            </div>
            <div className="absolute left-4 bottom-8 transform -rotate-12 opacity-15 w-48">
              <img 
                src="/lovable-uploads/6ecfb33f-d911-4f07-81c3-554c4af48f08.png" 
                alt=""
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Get summaries of
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> YouTube videos</span>
              <br />on WhatsApp
            </h1>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed max-w-2xl mx-auto">
              Get instant summaries and ask follow-up questions about any YouTube video directly through WhatsApp. 
              Save hours of watching time with AI-powered video intelligence.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 max-w-md mx-auto">
              <div className="flex items-center justify-center space-x-2 text-green-700">
                <MessageCircle className="w-5 h-5" />
                <span className="font-semibold">Works entirely on WhatsApp</span>
              </div>
              <p className="text-sm text-green-600 mt-1">No app downloads, no signups required</p>
            </div>
            <Button 
              onClick={handleWhatsAppClick}
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Try YT2Go on WhatsApp
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <p className="text-sm text-gray-500 mt-4">
              Free to use • Instant results • WhatsApp only
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get video insights in three simple steps. Everything happens in WhatsApp.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Open WhatsApp</h3>
                <p className="text-gray-600 leading-relaxed">
                  Click our WhatsApp link to start chatting with YT2Go instantly
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Play className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Send Video Link</h3>
                <p className="text-gray-600 leading-relaxed">
                  Share any YouTube video URL and watch the magic happen
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Get Insights</h3>
                <p className="text-gray-600 leading-relaxed">
                  Receive instant summaries and ask follow-up questions
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose YT2Go?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Save Time</h3>
                <p className="text-gray-600 leading-relaxed">
                  Get the key insights from hour-long videos in seconds. Perfect for busy professionals and learners.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Brain className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Analysis</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our AI understands context and provides meaningful summaries, not just transcripts.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">WhatsApp Native</h3>
                <p className="text-gray-600 leading-relaxed">
                  Everything happens in WhatsApp - no apps to download, no accounts to create, just instant access.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Instant Results</h3>
                <p className="text-gray-600 leading-relaxed">
                  Get summaries and answers within seconds, right in your WhatsApp chat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Smarter About Videos?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands who are already using YT2Go to learn faster and more efficiently through WhatsApp.
            </p>
            <Button 
              onClick={handleWhatsAppClick}
              size="lg" 
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Start Using YT2Go on WhatsApp
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 border-t border-gray-200">
        <div className="text-center text-gray-600">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-md flex items-center justify-center">
              <Brain className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold">YT2Go</span>
          </div>
          <p className="text-sm">
            Powered by Pkeday • Making video content accessible and actionable through WhatsApp
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
