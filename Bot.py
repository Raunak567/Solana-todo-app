import logging
from telegram import Update, InputFile
from telegram.ext import Application, CommandHandler, MessageHandler, filters, ContextTypes

# Enable logging
logging.basicConfig(
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    level=logging.INFO
)
logger = logging.getLogger(__name__)

# Define your command handlers. These usually take two arguments: update and context.
async def start(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    """Send a message when the command /start is issued."""
    await update.message.reply_text('Hi! Send me a file, and I will store it for you.')

async def echo(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    """Echo the user message."""
    await update.message.reply_text(update.message.text)

async def file_handler(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    """Handle file sharing."""
    file = update.message.document
    if file:
        file_id = file.file_id
        new_file = await context.bot.get_file(file_id)
        await new_file.download_to_drive(f"./{file.file_name}")
        await update.message.reply_text(f"File {file.file_name} has been saved!")

def main() -> None:
    """Start the bot."""
    # Insert your bot's token here
    token = '7342771443:AAF1K_CRbVT80h2eDrABLK8aKCDbdtzDBtM'

    # Create the Application and pass it your bot's token.
    application = Application.builder().token(token).build()

    # on different commands - answer in Telegram
    application.add_handler(CommandHandler("start", start))

    # on noncommand i.e message - echo the message on Telegram
    application.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, echo))

    # on file received - handle file
    application.add_handler(MessageHandler(filters.Document.ALL, file_handler))

    # Start the Bot
    application.run_polling()

if __name__ == '__main__':
    main()
