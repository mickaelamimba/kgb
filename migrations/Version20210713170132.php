<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210713170132 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE missions ADD contacts_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE missions ADD CONSTRAINT FK_34F1D47E719FB48E FOREIGN KEY (contacts_id) REFERENCES contacts (id)');
        $this->addSql('CREATE INDEX IDX_34F1D47E719FB48E ON missions (contacts_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE missions DROP FOREIGN KEY FK_34F1D47E719FB48E');
        $this->addSql('DROP INDEX IDX_34F1D47E719FB48E ON missions');
        $this->addSql('ALTER TABLE missions DROP contacts_id');
    }
}
